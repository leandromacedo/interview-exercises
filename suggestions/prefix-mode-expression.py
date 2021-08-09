#!/bin/python3
import os
import sys
import re
from typing import Dict, Optional, Tuple
"""Validations:
1. Operands are positive integers in base 10.
2. An operator MUST have exactly two operands, otherwise the expression is invalid.
3. A valida variable name is any sequence of chars that does not include whitespace (being white spaces, tabs, newlines, etc) -> use strip() functions
"""
# Complete the max_result_expression function below.
# You may add any imports you require from the standard library.
# Feel free to define your own helper functions, classes etc as you see fit.
supported_operands = ('+', '-', '*', '/') # this is optional but i think it makes things easier
def max_result_expression(expression: str, variables: Dict[str, Tuple[int, int]]) -> Optional[int]:
    """
    Evaluates the prefix expression and calculates the maximum result for the given variable ranges.
    Arguments:
        expression: the prefix expression to evaluate.
        variables: Keys of this dictionary may appear as variables in the expression.
            Values are tuples of `(min, max)` that specify the range of values of the variable.
            The upper bound `max` is NOT included in the range, so (2, 5) expands to [2, 3, 4].
    Returns:
        int:  the maximum result of the expression for any combination of the supplied variables.
        None: in the case there is no valid result for any combination of the supplied variables.
    """
    raise NotImplementedError('Please implement me!')


import unittest
from max_result_expression import max_result_expression
class TestMaxResultsExpression(unittest.TestCase):
    def test_it_returns_expected_value_for_given_examples(self):
        """
        The assertions are based on the given examples.
        """
        self.assertEqual(max_result_expression("+ 1 2", {}), 3)
        self.assertEqual(max_result_expression("+ 1 2", {}), 3)
        self.assertEqual(max_result_expression("* + 1 2 3 ", {}), 9)
        self.assertEqual(max_result_expression("- * + 1 2 3 4", {}), 5)
        self.assertEqual(max_result_expression("+ 10 x", { "x": (3, 4) }), 13)
        self.assertEqual(max_result_expression("+ 10 x", { "x": (3, 7) }), 16)
        self.assertEqual(max_result_expression("+ 1 5", {}), 6)
        self.assertEqual(max_result_expression("9", {}), 9)
        self.assertEqual(max_result_expression("* + 1 2 3", {}), 9)
        self.assertEqual(max_result_expression("+ 6 * - 4 + 2 3 8", {}), -2)
        self.assertEqual(max_result_expression("+ 1       2", {}), 3)
        self.assertEqual(max_result_expression("* + 2 x y", { "x": (0, 2), "y": (2, 4) }), 9)
    def test_it_returns_none_when_expression_is_invalid(self):
        self.assertIsNone(max_result_expression("+ 1 2 3", {}))
        self.assertIsNone(max_result_expression("+ 1", {}))
        self.assertIsNone(max_result_expression("-+1 5 3", {})) # operators and operands must be separated by one or more white spaces