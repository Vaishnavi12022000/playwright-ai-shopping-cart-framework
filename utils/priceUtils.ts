export class PriceUtils{
static convertPriceToNumber(price: string):number{
    return Number(price.replace("$",""));
}
static calculateSubtotal(price: number,quantity: number):number{
    return price*quantity;
}
static calculateGrandTotal(subtotals: number[]):number{
    return subtotals.reduce((total,value)=>total+value,0);
}
}