import { BinaryTree } from '../binary-tree';
import { TreeNode } from '../node';


describe('Binary Search Tree', () => {
  it('should add nodes in the right order', () => {
    const tree = new BinaryTree();
    const a = new TreeNode('a', 8)
    const b = new TreeNode('b', 7)
    const c = new TreeNode('c', 6)
    const d = new TreeNode('d', 5)

    tree.root = a;
     // Add nodes to the tree
    tree.addRecursive(tree.root, b);
    tree.addRecursive(tree.root, c);
    tree.addRecursive(tree.root, d);

    tree.toString()
 
     // Make assertions
    expect(tree.root.data).toBe('a');
    expect(tree?.root?.left?.data).toBe('b');
    expect(tree?.root?.left?.left?.data).toBe('c');
    expect(tree?.root?.left?.left?.left?.data).toBe('d');

  });
});
