const getCommon = (nums1, nums2) => {
	const map = nums2.reduce((h, n) => ((h[n] = true), h), {});
	return nums1.find((n) => map[n]) || -1;
};
