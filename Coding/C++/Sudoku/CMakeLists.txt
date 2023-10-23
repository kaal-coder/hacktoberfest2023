cmake_minimum_required(VERSION 3.24)
project(Project C)

set(CMAKE_C_STANDARD 11)

include_directories(.)

add_executable(Project
        grid.c
        grid.h
        sudoku.c
        sudoku.h)
