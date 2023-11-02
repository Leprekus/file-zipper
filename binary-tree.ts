import { TreeNode } from './node';

export class BinaryTree<T> {
    root: null | TreeNode<T>;

    constructor(root?: T) {
        this.root = new TreeNode<T>(root) ?? null;
    }


    public addRecursive(current:TreeNode<T>, node: TreeNode<T>): TreeNode<T> {

        if(current === null) return node;
        
        if(node.frequency < current.frequency) {
            current.left = this.addRecursive(current.left!, node)
        } else if(node.frequency > current.frequency) {
            current.right = this.addRecursive(current.right!, node)
        } else return current //value already exists

        return current;
        
    }
}
