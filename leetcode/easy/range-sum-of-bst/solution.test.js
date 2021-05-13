/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const rangeSumBST = (root, low, high) => {
  let sum = 0;

  const dfs = (node) => {
    if (!node) {
      return;
    }

    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }

    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);
  return sum;
};

describe('Name of the group', () => {
  it('should ', () => {
    expect(rangeSumBST([10, 5, 15, 3, 7, null, 18],
      7,
      15)).toBe(0);
  });
});
