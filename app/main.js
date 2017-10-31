"use strict";

var MAX = 1000000

function say(str) {
    console.log(str)
}

function isInteger( x ) {
    x = parseFloat( x );
    return Math.round(x) === x;
}

function gcd(x, y) {
    return (y == 0) ? x : gcd(y, x % y)
}



function getPrimes() {
    var f_prime = new Array(MAX);

    //全ての数に対して素数フラグを立てる
    for (var i = 0; i < MAX; i++) { f_prime[i] = true; }
    //最大値の平方根を計算
    var max = Math.floor(Math.sqrt(MAX));

    //0,1は素数でないので外す
    f_prime[0] = false;
    f_prime[1] = false;

    //探索リストの先頭 >= MAXの平方根まで、素数リストの倍数をふるい落としていく
    for(var i = 2; i <= max; i++) {
        //素数だったら
        if(f_prime[i] === true) {
            //その倍数をふるい落とす
            for(var j = i * 2; j <= MAX; j += i) {
                f_prime[j] = false;
            }
        }
    }

    // TODO: 1 パスでやってしまうべき
    var res = {}
    for ( var idx in f_prime ) {
        if ( f_prime[idx] ) {
            res[idx] = 1
        }
    }
    return res
}


function dirichlet(argv) {
    var a = Number( argv[0] )
    var b = Number( argv[1] )
    var m = Number( argv[2] )

    var primes = getPrimes()
    var prime_count = 0
    for ( var n = 1; n < MAX; n++ ) {
        if ( primes[a * n + b] ) {
            prime_count++
            if ( prime_count >= m ) return a * n + b
        }
    }
}


function main(argv) {
    /**
     * このコードは引数と標準出力を用いたサンプルコードです。
     * このコードは好きなように編集・削除してもらって構いません。
     *
     * This is a sample code to use arguments and outputs.
     * You can edit and even remove this code as you like.
     */

    // 引数チェック (順に 個数/整数/互いに素 の条件)
    if ( argv.length != 3
         || !isInteger( argv[0] ) || !isInteger( argv[1] ) || !isInteger( argv[2] )
         || gcd(argv[0], argv[1]) != 1
    ) {
        say( -1 )
        return -1
    }

    say( dirichlet(argv) )
    return 0
}

module.exports = main;


// main(process.argv.slice(2))
