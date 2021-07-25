{
  interface Either<L, R> {
    left: () => L;
    right: () => R;
  }

  class EitherImpl<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R){}

    left(): L {
      return this.leftValue;
    }

    right(): R {
      return this.rightValue;
    }
  }

  const either = new EitherImpl(4, 5);
  console.log(either.left()); // 4
  console.log(either.right()); // 5

  const best = new EitherImpl({name: 'hyeokjin'}, 'hello');
}