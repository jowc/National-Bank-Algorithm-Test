# National-Bank-Algorithm-Test

This is my solution to National Bank Algorithm Test.

National Bank has a simple policy for warning clients about possible fraudulent account activity.
If the amount spent by a client on a particular day is greater than or equal to 2x the client's median spending for the last d days, they send the client a notification about potential fraud.
The bank doesn't send the client any notifications until they have at least d prior days of transaction data.
Given the value of d and a client's total daily expenditures for a period of n days, find and print the number of times the client will receive a notification over all n days.

Note: The median of a list of numbers can be found by arranging all the numbers from smallest to greatest.
If there is an odd number of numbers, the middle one is picked. If there is an even number of numbers, the median is then defined to be the average of the two middle values. (Wikipedia)

Input Format
The first line contains two space-separated integers denoting the respective values of n (the number of days there is transaction data for) and d (the number of prior days the bank uses to calculate median spending).
The second line contains n space-separated non-negative integers where each integer i denotes expenditure (i.e., the client's total expenditure for day i).
Constraints
. 1 <= n <= (2 \* 10^5)
. 1 <= d <= n
. 0 <= expenditure <= 200

Output Format
Print an integer denoting the total number of times the client receives a notification over a period of n days.

Sample Input
9 5
2 3 4 2 3 6 8 4 5
Expected Output
2

Explanation
We must determine the total number of notifications the client receives over a period of n = 9 days.
For the first five days, the customer receives no notifications because the bank has insufficient transaction data and notifications = 0.

On the sixth day, the bank has d = 5 days of prior transaction data, {2,3,4,2,3}, and median = 3 dollars.
