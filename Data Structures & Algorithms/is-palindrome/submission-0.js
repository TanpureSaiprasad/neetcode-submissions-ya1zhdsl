class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        console.log(s);
        let palindromString = s.split("").reverse().join("");
        console.log(palindromString);
        if(palindromString==s)
            return true;
        else
            return false;
    }
}
