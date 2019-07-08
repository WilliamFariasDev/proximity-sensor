# proximity-sensor

Para fazer funcionar tive que mexer na library react-native-proximity.

1 - no arquivo node_modules/react-native-proximity/android/build.gradle 

Adicionar em dependencies: implementation 'androidx.appcompat:appcompat:1.0.2'

2 - no arquivo node_modules/react-native-proximity/android/src/main/java/com/RNProximity/RNProximityModule.java

Trocar a linha 9 por: import androidx.annotation.NonNull;
