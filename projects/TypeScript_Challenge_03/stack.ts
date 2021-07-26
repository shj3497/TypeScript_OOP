{
  interface Stack<V>{
    readonly size: number;
    push(value: V): void;
    pop(): V;
  }

  type StackNode<V> = {
    readonly value: V; //? 현재 입력된 값이 있는 곳
    readonly next?: StackNode<V> //? 다음 노드를 가르키는 곳
  }

  class StackImpl<V> implements Stack<V> {
    
    private _size: number = 0;
    private head?: StackNode<V>;

    constructor(private capacity:number){}
    get size(){
      return this._size;
    }

    push(value: V){
      if(this._size === this.capacity){
        throw new Error('Stack is Full!');
      }

      const node: StackNode<V> = {
        value: value,
        next: this.head
      }

      this.head = node;
      this._size++;
    }

    pop(): V{
      if(this.head == null){
        throw new Error('Stack is Empty!');
      }

      const node = this.head;
      this.head = node.next;
      this._size--;

      return node.value;
    }
  }

  const stack = new StackImpl<string>(5);
  stack.push('HyeokJin 1');
  stack.push('HyeokJin 2');
  stack.push('HyeokJin 3');
  while(stack.size !== 0){
    console.log(stack.pop());
  }

  const stack2 = new StackImpl(5);
  stack2.push('HyeokJin 1');
  stack2.push('HyeokJin 2');
  stack2.push({name:'HyeokJin', age:28});
  while(stack2.size !== 0){
    console.log(stack2.pop());
  }
}