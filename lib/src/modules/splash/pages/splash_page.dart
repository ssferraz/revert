import 'package:flutter/material.dart';

class SplashPage extends StatefulWidget {
  const SplashPage({super.key});

  @override
  State<SplashPage> createState() => _SplashPageState();
}

class _SplashPageState extends State<SplashPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Revert"),
      ),
      floatingActionButton: FloatingActionButton(
          child: const Icon(Icons.safety_check), onPressed: () {}),
    );
  }
}
