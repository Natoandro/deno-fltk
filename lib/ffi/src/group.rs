use std::mem::transmute;

use crate::export;
use fltk_sys::group::*;

export!(fn group_create(x: i32, y: i32, width: i32, height: i32, title: *const i8) -> *mut Fl_Group, Fl_Group_new);
export!(fn group_end(g: *mut Fl_Group), Fl_Group_end);

#[no_mangle]
pub unsafe extern "C" fn group_fill_parent(g: *mut Fl_Group) {
    let parent = Fl_Group_parent(g);
    let parent: *mut Fl_Group = transmute(parent);
    let w = Fl_Group_width(parent);
    let h = Fl_Group_height(parent);
    let x = Fl_Group_x(g);
    let y = Fl_Group_y(g);
    println!("x={x}, y={y}, w={w}, h={h}");
    Fl_Group_resize(g, x, y, w, h);
}
