SELECT *
FROM chatrooms
INNER JOIN messages ON chatrooms.id=messages.conversation_id
WHERE conversation_id=$1;