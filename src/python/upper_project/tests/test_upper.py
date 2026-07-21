# test_upper.py

import unittest
from upper.upper import to_upper

class TestUpperModule(unittest.TestCase):

    def test_single_character(self):
        self.assertEqual(to_upper("a"), "A")

    def test_single_word(self):
        self.assertEqual(to_upper("hello"), "HELLO")

    def test_multiple_words(self):
        self.assertEqual(to_upper("hello", "world"), "HELLO WORLD")

    def test_mixed_case(self):
        self.assertEqual(to_upper("Hello", "World"), "HELLO WORLD")

    def test_empty_input(self):
        self.assertEqual(to_upper(), "")

    def test_numbers_and_special_chars(self):
        self.assertEqual(to_upper("123", "@#$"), "123 @#$")

if __name__ == '__main__':
    unittest.main()
