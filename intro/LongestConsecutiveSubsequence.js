// Longest Consecutive Sequence 


// let arr1 = ['a','e', 'd', 'f'];
// let arr2 = ['a','b', 'c', 'd'];

let arr1 = ['A', 'B', 'C', 'D', 'G', 'H'];
let arr2 = ['A', 'E', 'D', 'F', 'H', 'R'];

let m = arr1.length;
let n = arr2.length;

// returns the length of longest common subsequence
function longestCommonSubsequence(arr1, arr2, m, n) {
    // initialize a matrix of size [m+1]*[n+1]
    let dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(0);
    }

    // build the dp matrix in bottom-up fashion
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (arr1[i - 1] == arr2[j -1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // length of longest common subsequence will be in dp[m][n]
    return dp[m][n];
}


console.log("Arr1: ", arr1);
console.log("Arr2: ", arr2);
console.log("Length of Longest Common Subsequence is: ", longestCommonSubsequence(arr1, arr2, m, n));