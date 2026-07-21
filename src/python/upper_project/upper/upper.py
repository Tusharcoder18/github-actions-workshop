# upper.py

def to_upper(*args):
    """
    Converts the given arguments to uppercase.

    Args:
        *args: Variable-length arguments representing strings to convert.

    Returns:
        str: A single string of all arguments converted to uppercase and joined with spaces.
    """
    return ' '.join(arg.upper() for arg in args)

if __name__ == "__main__":
    import sys
    args = sys.argv[1:]  # Get arguments from the command line
    print(to_upper(*args))  # Print the uppercase conversion
