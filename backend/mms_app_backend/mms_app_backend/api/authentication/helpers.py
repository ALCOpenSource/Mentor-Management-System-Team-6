from .constants import PASSWORD_CONTEXT


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return PASSWORD_CONTEXT.verify(plain_password, hashed_password)


def get_password_hash(password: str) -> str:
    return PASSWORD_CONTEXT.hash(password)
