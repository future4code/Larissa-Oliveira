export class CypherCardNumber {

    cypherNumber(
        card: string
    ): string {
        let coverNumber = [];
        for (let i = 0; i < card.length; i++) {
            if (i < card.length - 4) {
                coverNumber.push("*");
            } else {
                coverNumber.push(card[i]);
            }
        }
        return coverNumber.join("");
    }
}
