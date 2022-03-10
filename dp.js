//https://leetcode.com/problems/target-sum/discuss/455024/DP-IS-EASY!-5-Steps-to-Think-Through-DP-Questions.
/*
This post will walk you through the THINKING process behind Dynamic Programming so that you can solve these questions on your own.

Category
Most dynamic programming questions can be boiled down to a few categories. It's important to recognize the category because it allows us to FRAME a new question into something we already know. Frame means use the framework, not copy an approach from another problem into the current problem. You must understand that every DP problem is different.

Question: Identify this problem as one of the categories below before continuing.

0/1 Knapsack
Unbounded Knapsack
Shortest Path (eg: Unique Paths I/II)
Fibonacci Sequence (eg: House Thief, Jump Game)
Longest Common Substring/Subsequeunce
Answer: 0/1 Knapsack

Why 0/1 Knapsack? Our 'Capacity' is the target we want to reach 'S'. Our 'Items' are the numbers in the input subset and the 'Weights' of the items are the values of the numbers itself. This question follows 0/1 and not unbounded knapsack because we can use each number ONCE.

What is the variation? The twist on this problem from standard knapsack is that we must add ALL items in the subset to our knapsack. We can reframe the question into adding the positive or negative value of the current number to our knapsack in order to reach the target capacity 'S'.

States
What variables we need to keep track of in order to reach our optimal result? This Quora post explains state beautifully, so please refer to this link if you are confused: www.quora.com/What-does-a-state-represent-in-terms-of-Dynamic-Programming

Question: Determine State variables.
Hint: As a general rule, Knapsack problems will require 2 states at minimum.

Answer: Index and Current Sum
Why Index? Index represents the index of the input subset we are considering. This tells us what values we have considered, what values we haven't considered, and what value we are currently considering. As a general rule, index is a required state in nearly all dynamic programming problems, except for shortest paths which is row and column instead of a single index but we'll get into that in a seperate post.

Why Current Sum? The question asks us if we can sum every item (either the positive or negative value of that item) in the subset to reach the target value. Current Sum gives us the sum of all the values we have processed so far. Our answer revolves around Current Sum being equal to Target.

Decisions
Dynamic Programming is all about making the optimal decision. In order to make the optimal decision, we will have to try all decisions first. The MIT lecture on DP (highly recommended) refers to this as the guessing step. My brain works better calling this a decision instead of a guess. Decisions will have to bring us closer to the base case and lead us towards the question we want to answer. Base case is covered in Step 4 but really work in tandem with the decision step.

Question: What decisions do we have to make at each recursive call?
Hint: As a general rule, Knapsack problems will require 2 decisions.

Answer: This problem requires we take ALL items in our input subset, so at every step we will be adding an item to our knapsack. Remember, we stated in Step 2 that "The question asks us if we can sum every item (either the positive or negative value of that item) in the subset to reach the target value." The decision is:

Should we add the current numbers positive value
Should we add the current numbers negative value
As a note, knapsack problems usually don't require us to take all items, thus a usual knapsack decision is to take the item or leave the item.

Base Case
Base cases need to relate directly to the conditions required by the answer we are seeking. This is why it is important for our decisions to work towards our base cases, as it means our decisions are working towards our answer.

Let's revisit the conditions for our answers.

We use all numbers in our input subset.
The sum of all numbers is equal to our target 'S'.
Question: Identify the base cases.
Hint: There are 2 base cases.

Answer: We need 2 base cases. One for when the current state is valid and one for when the current state is invalid.

Valid: Index is out of bounds AND current sum is equal to target 'S'
Invalid: Index is out of bounds
Why Index is out of bounds? A condition for our answer is that we use EVERY item in our input subset. When the index is out of bounds, we know we have considered every item in our input subset.

Why current sum is equal to target? A condition for our answer is that the sum of using either the positive or negative values of items in our input subet equal to the target sum 'S'.

If we have considered all the items in our input subset and our current sum is equal to our target, we have successfully met both conditions required by our answer.

On the other hand, if we have considered all the items in our input subset and our current sum is NOT equal to our target, we have only met condition required by our answer. No bueno.


*/
