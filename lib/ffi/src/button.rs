use std::{ffi::c_void, mem::transmute};

use crate::export;
pub use fltk_sys::button::*;

export!(fn button_create(x: i32, y: i32, width: i32, height: i32, title: *const i8) -> *mut Fl_Button, Fl_Button_new);
export!(fn button_set_title(bt: *mut Fl_Button, title: *const i8), Fl_Button_set_label);
export!(fn button_set_damage(bt: *mut Fl_Button, flag: u8), Fl_Button_set_damage);

#[no_mangle]
pub unsafe extern "C" fn button_set_callback(bt: *mut Fl_Button, ev_code: u32) {
    Fl_Button_set_callback(bt, Some(callback), transmute(ev_code as usize))
}

unsafe extern "C" fn callback(_w: *mut Fl_Widget, data: *mut c_void) {
    let ev_code: usize = transmute(data);
    let ev_code = ev_code as u32;
    crate::sync::push(ev_code);
}
