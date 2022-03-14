import { performPurchase } from "../src"
// import { User } from "../src/model/User"

export interface User {
	name: string
	balance: number
}

test("Testing balance greater than value", () => {

    const user: User = {
        name: "Usuario1",
        balance: 200
    }

    const result = performPurchase(user, 20)
    expect(result).toEqual({
        name: "Usuario1",
        balance: 180
    })

})

test("Testing balance greater than value", () => {
    const user: User = {
        name: "Usuario1",
        balance: 200
    }

    const result = performPurchase(user, 200)

    expect(result).toEqual({
        ...user,
        balance: 0
    })
})