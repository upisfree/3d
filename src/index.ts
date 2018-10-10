import tick from './core/tick';
import resize from './platform/resize';
import keyboard from './core/controls/keyboard';
import mouse from './core/controls/mouse';
import Scene from './game/scene';

resize();
keyboard();
mouse();
Scene.generateObjectsFromMap();

tick();