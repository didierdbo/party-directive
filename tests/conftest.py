import numpy as np
import pytest


# Every test function that needs randomness takes this fixture.
# pytestDeterministic by default.
@pytest.fixture
def rng():
    return np.random.default_rng(seed=42)


class FakeRNG:
    """Concrete test fake. Structurally satisfies resolution.RollRNG."""

    def __init__(self, roll: int) -> None:
        self.roll = roll

    def integers(self, low: int, high: int) -> int:
        return self.roll
