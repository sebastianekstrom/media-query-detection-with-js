module.exports = function(grunt) {

    /* ====================================
        Project configuration
    ==================================== */

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /*
            Watch
        ==================================== */
        watch: {
            sass: {
                files: ['**/*.scss'],
                tasks: ['sass:dev', 'autoprefixer'],
                options: {
                    livereload: true,
                }
            }
        },

        /*
            Sass
        ==================================== */
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    trace: true
                },
                files: {
                    'style.css': 'scss/style.scss'
                }
            }
        },

        /*
            CSS autoprefixer
        ==================================== */
        autoprefixer: {
            dist: {
                options: {
                    browsers: ['last 3 versions', '> 1%', 'ie 8', 'ie 7']
                },
                src: 'style.css',
                dest: 'style.css'
            }
        }
    });

    /* ====================================
        Enable plugins
    ==================================== */

    grunt.loadNpmTasks ('grunt-autoprefixer');
    grunt.loadNpmTasks ('grunt-contrib-sass');
    grunt.loadNpmTasks ('grunt-contrib-watch');

    /* ====================================
        Tasks
    ==================================== */

    grunt.registerTask('default', [
        'sass:dev',
        'autoprefixer',
        'watch'
    ]);

};
