import 'package:flutter_test/flutter_test.dart';

void main() {
  test('Function sum test', () async {
    expect(10, sum(5, 5));
  });
}

int sum(int x, int y) {
  return x + y;
}
