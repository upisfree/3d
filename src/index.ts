import tick from './core/tick';
import resize from './platform/resize';
import keyboard from './core/controls/keyboard';
import Scene from './game/scene';

resize();
keyboard();
Scene.generateObjectsFromMap();

tick();