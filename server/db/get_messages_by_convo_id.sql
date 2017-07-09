SELECT messages.message_body
FROM chatrooms
INNER JOIN messages ON chatrooms.ID=messages.conversation_ID
WHERE conversation_id=$1;