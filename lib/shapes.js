// Make shapes classes

class Square {
    // grabbing color set by user
    constructor(color) {
        this.color = color;
    }
    // render the shape
    render(){
        return `<rect x="70" y="20" width="160" height="160" fill="${this.color}"/>`
    }
}

class Triangle {
    constructor(color) {
        this.color = color;
    }
    
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}

class Circle {
    constructor(color) {
        this.color = color;
    }
    
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}

// for exporting
module.exports = { Square, Circle, Triangle }