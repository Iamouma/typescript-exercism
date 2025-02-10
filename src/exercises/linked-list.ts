class Node<T> {
  constructor(
    public value: T,
    public next: Node<T> | null = null,
    public prev: Node<T> | null = null
  ) {}
}

export class LinkedList<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private length: number = 0;

  public push(element: T): void {
    const newNode = new Node(element);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  public pop(): T | never {
    if (!this.tail) throw new Error('List is empty');
    const value = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    this.length--;
    return value;
  }

  public shift(): T | never {
    if (!this.head) throw new Error('List is empty');
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    this.length--;
    return value;
  }

  public unshift(element: T): void {
    const newNode = new Node(element);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  public delete(element: T): void {
    let current = this.head;
    while (current) {
      if (current.value === element) {
        if (current.prev) current.prev.next = current.next;
        if (current.next) current.next.prev = current.prev;
        if (current === this.head) this.head = current.next;
        if (current === this.tail) this.tail = current.prev;
        this.length--;
        return;
      }
      current = current.next;
    }
  }

  public count(): number {
    return this.length;
  }
}

