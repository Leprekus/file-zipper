//import { BinaryTree } from './binary-tree';
import { BinaryTree } from './binary-tree';
import { TreeNode } from './node';


// const root = new TreeNode<String>("test");
// const a = new TreeNode<String>("a");
// const b = new TreeNode<String>("b");

// const tree = new BinaryTree(root);
// tree.add(a)

//higher priority given to lower frequency
//these nodes go at the lowest levels in the tree
const dataSample = 'AABBBCCCCDDDDEEEFFGGHHIIIJJJJKKLLLMMMNNOPPQQRRRSSSTUUVVWXXYYZZ0123456789'
const hash: { [key: string] : number} = {}
const frequency: [ string, number ] [] = []


//count frequency
for(let i = 0, idx = 0; i < dataSample.length; ++i) {

    const char: string = dataSample[i]
    
    if(hash[char] || hash[char] === 0)
        frequency[ hash[char] ][1] += 1
    else {
        hash[char] = idx++
        const entry: [ string, number] = [ char, 1 ]
        frequency[ hash[char] ] = entry
    }
}

//sort descending
//inserting popped elements
//sorts array with least common to most common
frequency.sort((a, b) => b[1] - a[1])

let arrLen = Math.ceil(frequency.length / 2) - 1
const queue = new Array(arrLen)

//create queue
for (let i = frequency.length - 1; i >= 0; --i) {

    const current = frequency[i]
    const next = frequency[i - 1]
    if(current && next) {
        const [char1, freq1 ] = frequency.pop()!
        const [char2, freq2 ] = frequency.pop()!
        --i;
        const right = new TreeNode<string>(char1, freq1)
        const left = new TreeNode<string>(char2, freq2)

        const freq_sum = right.frequency + left.frequency
        const node = new TreeNode<string>(undefined, freq_sum)
        //higher frequency left, lower right
        node.right = right
        node.left = left

        queue[--arrLen] = node

    } else {
        const root = new TreeNode<string>(current[0], current[1])
        queue[--arrLen] = root
    }

}



console.log(queue[0])
//create tree
const tree = new BinaryTree(queue[0])