// client chỉ nên phục thuộc vào những thứ nó cần
// tức là abstract class or interface không nên cover quá nhiều các th trong trừu tượng
// ví dụ về các lớp động vật chim, mèo, cá 

// trước khi áp dụng Interface Segregation Principle

interface Moveable {
    run(): void
    fly(): void
    swim(): void
}

class Cat implements Moveable {
    run(): void {
        console.log('Cat can run!')
    }
    fly(): void {}
    swim(): void {}
}


class Bird implements Moveable {
    run(): void {}
    fly(): void {
         console.log('Bird can fly')
    }
    swim(): void {}
}


class Fish implements Moveable {
    run(): void {}
    fly(): void {}
    swim(): void {
        console.log('Fish can swim!')
    }
}



// sau khi áp dụng Interface Segregation
interface Flyable {
    fly(): void
}

interface Runnable {
    run(): void
}

interface Swimmable {
    swim(): void
}

class Fish2 implements Swimmable {
    swim(): void {
        console.log('Fish can swim!')
    }
}

class Bird2 implements Flyable {
    fly(): void {
        console.log('Bird2 can fly!')
    }
}