import { ToastConfigType, ToastType } from "../types/index.js";

type ToastData = {
  id: number;
  message: string;
  type: ToastType;
  config: ToastConfigType;
  className?: string;
}

export default class Toast {
  private _id: number;
  private _message: string;
  private _type: ToastType;
  private _config: ToastConfigType;
  private _className?: string;

  constructor(data: ToastData) {
    this._id = data.id;
    this._message = data.message;
    this._type = data.type;
    this._config = data.config;
    this._className = data.className;
  }

  // Getters

  get id(): number {
    return this._id;
  }

  get message(): string {
    return this._message;
  }

  get type(): string {
    return this._type;
  }

  get config(): ToastConfigType {
    return this._config;
  }

  get className(): string | undefined {
    return this._className;
  }

  // Setters

  set id(id: number) {
    this._id = id;
  }

  set message(message: string) {
    this._message = message;
  }

  set type(type: ToastType) {
    this._type = type;
  }

  set config(config: ToastConfigType) {
    this._config = config;
  }

  set className(className: string | undefined) {
    this._className = className;
  }
}
