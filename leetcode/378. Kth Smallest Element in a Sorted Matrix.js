// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/

// 378. Kth Smallest Element in a Sorted Matrix
/*
Given an n x n matrix where each of the rows and columns are sorted in ascending order, return the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.
*/

const kthSmallest = (matrix, k) =>
	matrix.reduce((f, row) => f.concat(row), []).sort((a, b) => a - b)[k - 1];
