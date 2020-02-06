export class Empty {
    // map :: (A -> B) -> A -> B
    public map(_: any) {
        return this;
    }

    // fmap :: (A -> B) -> Wrapper[A] -> Wrapper[B]
    public fmap(_: any) {
        return new Empty();
    }

    public toString() {
        return "Empty ()";
    }
}

const empty: () => Empty = () => new Empty();

export default { empty };
