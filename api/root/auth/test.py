import bcrypt

plain_password = "Adm!n_9042#Xy".encode("utf-8")
stored_hashed_password = b"$2b$12$5iFXuT3uYlxHocwThFVl9efhEzN8yd.phmW7gIGk4mVkCGu2qMPoe"

print(bcrypt.checkpw(plain_password, stored_hashed_password))


# password = "Adm!n_9042#Xy"
# hashed = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())
# print(hashed.decode())
