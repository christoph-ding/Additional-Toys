// Write a SQL query to find employees who have the highest salary in each of the departments. For the above tables, Max has the highest salary in the IT department and Henry has the highest salary in the Sales department.

// 1.  get a table of the max salaries
"select max(Salary) from Employee group by Department ID  as MaxSalary"

// this would return a table like the following:
/*

 Id | Name  | Salary | DepartmentId
4     Max     90000         1 
2     Henry   80000         2  

*/ 

// 2.  select from that table
"select * from "


// 3.  combined
"
select *
from Employee
where Salary in 
(select max(Salary from Employee 
groupby DepartmentId) as MaxSalary
"
