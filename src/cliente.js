class Client {
    constructor(name, taxes = {}){
        this._name=name;
        this.taxes = taxes;

    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    calc_taxes(){
        if(this.taxes.anuual_gross_amount && !this.taxes.expenses) { return 0}
        return (this.taxes.anuual_gross_amount - this.taxes.expenses) * 0.21
    }
        
}

export default Client;