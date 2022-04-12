import validateCharacter from "../src/validateCharacter"


test("Should return false for empty name", () => {
    const result = validateCharacter({
        name: "",
        life: 20,
        strength: 30,
        defense: 70,
    })

    expect(result).toBe(false)
})
test("Should return false for empty name", () => {
    const result = validateCharacter({
        name: "Pedro",
        life: 0,
        strength: -20,
        defense: -30,
    })

    expect(result).toBe(false)
})