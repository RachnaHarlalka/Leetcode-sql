# Write your MySQL query statement below
select r.contest_id,ROUND((count(r.user_id)/(select count(user_id) from Users)*100),2) as percentage 
from Users u
left join register r
on u.user_id = r.user_id
group by r.contest_id
order by percentage desc,r.contest_id asc