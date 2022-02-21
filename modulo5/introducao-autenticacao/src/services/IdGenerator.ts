import {v4} from "uuid"

export function IdGenerator(): string{
    return v4()
}