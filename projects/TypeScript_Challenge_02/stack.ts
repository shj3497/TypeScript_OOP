{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): void;
  }

  type StackNode = {
    readonly value: string; //? 현재 입력된 값이 있는 곳
    readonly next?: StackNode //? 다음 노드를 가르키는 곳
  }

  class StackImpl implements Stack {

    private _size: number = 0;
    private head?: StackNode

    constructor(private capacity: number){}
    get size() {
      return this._size;
    }

    push(value: string){
      if(this.size === this.capacity){
        throw new Error('Stack is Full!');
      }

      const node: StackNode = {
        value: value,
        next: this.head
      }
      this.head = node;
      // console.log(this.head); //? 하단 주석 참고
      this._size++;
    }

    pop(): string{
      if(this.head == null){
        throw new Error('Stack is Empty!');
      }

      const node = this.head;
      this.head = node.next;
      this._size--;

      return node.value;
    }
  }

  const stack = new StackImpl(5);
  stack.push('HyeokJin 1');
  stack.push('HyeokJin 2');
  stack.push('HyeokJin 3');
  while(stack.size !== 0){
    console.log(stack.pop());
  }

  /**
   * {                                                 
        value: 'HyeokJin 3',                            
        next: {                                         
          value: 'HyeokJin 2',                          
          next: { value: 'HyeokJin 1', next: undefined }
        }                                               
      }                                                 
   */
}