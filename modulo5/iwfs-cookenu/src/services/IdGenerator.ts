import { v4 } from 'uuid';

export class IdGenerator {
    public generate() {
        return v4();
    }
}