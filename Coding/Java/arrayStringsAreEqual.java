class Solution {
  public boolean arrayStringsAreEqual(String[] w1, String[] w2) {
    int wInd1 = 0;
    int wInd2 = 0;
    int ind1 = 0;
    int ind2 = 0;
    while (wInd1 < w1.length && wInd2 < w2.length) {
      if (ind1 == w1[wInd1].length() || ind2 == w2[wInd2].length()) {
        if (ind1 == w1[wInd1].length()) {
          wInd1++;
          ind1 = 0;
        }
        if (ind2 == w2[wInd2].length()) {
          wInd2++;
          ind2 = 0;
        }
      } else {
        if (w1[wInd1].charAt(ind1) != w2[wInd2].charAt(ind2)) {
          return false;
        }
        ind1++;
        ind2++;
      }
    }
    return wInd1 == w1.length && wInd2 == w2.length;
  }
}
