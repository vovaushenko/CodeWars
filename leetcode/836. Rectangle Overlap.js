// 836. Rectangle Overlap
/*
An axis-aligned rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) is the coordinate of its bottom-left corner, and (x2, y2) is the coordinate of its top-right corner. Its top and bottom edges are parallel to the X-axis, and its left and right edges are parallel to the Y-axis.

Two rectangles overlap if the area of their intersection is positive. To be clear, two rectangles that only touch at the corner or edges do not overlap.

Given two axis-aligned rectangles rec1 and rec2, return true if they overlap, otherwise return false.
*/
const isRectangleOverlap = (r1, r2) => {
	const [ax1, ay1, ax2, ay2] = r1;
	const [bx1, by1, bx2, by2] = r2;
	return ax2 > bx1 && ax1 < bx2 && ay1 < by2 && ay2 > by1;
};
