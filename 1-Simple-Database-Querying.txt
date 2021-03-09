SELECT u.ID, u.UserName, e.UserName as ParentUserName 
FROM USER u 
LEFT JOIN USER e ON e.ID = u.Parent 
ORDER BY u.ID