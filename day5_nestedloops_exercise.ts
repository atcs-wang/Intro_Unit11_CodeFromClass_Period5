function pattern0() {
    console.log("\n\nPattern 0");
    for (let i = 1; i <= 5; i++) {
        let s: string = "";
        for (let j = 1; j <= i; j++) {
            s += j + " ";
        }
        console.log(s);
    }
}

function pattern1() {
    console.log("\n\nPattern 1");

    for (let i = 5; i >= 1; i--) {
        let list: number[] = [];
        let num = 1;
        for (let j = 1; j <= i; j++) {
            list.push(num);
            num *= 2;
        }
        console.log(list.join("xxx"));
    }
}

function pattern2() {
    console.log("\n\nPattern 2");
    let list: number[] = []
    for (let i = 1; i < 5; i++) {
        let j: number = 0;
        while (j < i) {
            list.push(j);
            j++;
        }
    }
    console.log(list.join(" "));
}

function pattern3() {
    console.log("\n\nPattern 3");
    let i = 0;
    while (i < 5) {
        let s = "****"
        for (let j = i; j > 1; j--)
            s = j + " " + s;

        console.log(s);
        i++;
    }
}

function pattern4() {
    console.log("\n\nPattern 4");

    for (let i = 1; i <= 5; i++) {
        let num = 1;
        let s: string = ""
        for (let j = 1; j <= i; j++) {
            s += num + "G";
            num += 2;
        }
        console.log(s);
    };
}

pattern0();
pattern1();
pattern2();
pattern3();
pattern4();
