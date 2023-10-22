/**
 * Javascript Drum Machine
 * @author Sebastian Inman
 * @version 1.0.0
 * @desc This is a javascript experiment created
 * to demonstrate music patterns in the web browser.
 * I started this project just for fun and intend on
 * adding more to it and keeping this pen updated.
 * All drum samples were provided by 99Samples: 
 * http://99sounds.org/drum-samples/
 */

(function(DrummerJS, $, undefined) {

    'use strict';

    // ======================================
    // establish public variables and methods
    // ======================================

    DrummerJS.title = 'Javascript Drum Machine';
    DrummerJS.description = 'Create audio loops using drum  samples.'
    DrummerJS.author = 'Sebastian Inman';

    var $_container = $('.player');
    var $_containerWidth  = $_container.width();
    var $_containerHeight = $_container.height();

    var $_setBPM = $('#set-bpm');
    var $_playPauseBtn = $('#play-pause');
    var $_setSamplesBtn = $('#set-samples');

    var $_toggleRowBtn;
    var $_sampleBtn;

    var _urlHash;

    var _sampleList = 'default';

    var _totalSteps = 16;
    var _totalRows  = 5;

    var _currentStep = 1;

    var _sampleRate = 44100;
    var _minuteInSeconds = 60;
    var _beatsPerMinute =  90;

    var _stepDelay;

    var calculateBPM = function() {

      _stepDelay = Math.round(((_sampleRate * _minuteInSeconds) / (_beatsPerMinute * _totalSteps)) / _totalSteps);

      return _stepDelay;

    };

    // =======================================================
    // creates namespace provider which helps isolate
    // implementated code from the global namespace, providing
    // a single point of access for functions and methods.
    // =======================================================
    // this keeps the code more organized and allows the code
    // to be combined into more logical sections.
    // =======================================================

    DrummerJS.handler = (function() {

        function _handler() {

            /**
             * @var _this
             * @desc in a 'non-strict' environment, 'this' is bound to
             *       the global scope (if it hasn't been bound to anything else).
             *       in 'strict' mode it is set to undefined. we store it in a
             *       variable to avoid scope conflicts.
             */

            var _this = this;

            var _isPlaying;

            this.playPauseHandler = function(button) {

              calculateBPM();

              var status = button.data('playing');

              if(status === 'true') {

                button.data('playing', 'false').html('<i class="fa fa-play"></i>');

                _this.stopAudio();

              }else {

                button.data('playing', 'true').html('<i class="fa fa-pause"></i>');

                _this.startAudio();

              }

            };

            this.pageLoad = function() {

              if(!window.location.hash) {

                window.location.hash = '!/';

              }

              _urlHash = window.location.hash.split('/');

            };

            this.toggleSample = function(sample) {

              sample.toggleClass('active');

            };

            this.toggleSampleHandler = function() {

              $('.sample').on('click', function() {

                _this.toggleSample($(this));

              });

            };

            this.updateSampleList = function(samples) {

              _sampleList = samples;

              console.log(_sampleList);

            };

            this.updateBPM = function(bpm) {

              _beatsPerMinute = bpm;

              calculateBPM();

              _this.stopAudio();
              _this.startAudio();

            };

            this.stopAudio = function() {

              $_sampleBtn.removeClass('hit');

              clearInterval(_isPlaying);

            };

            this.startAudio = function() {

              _isPlaying = window.setInterval(function() {

                  _this.playAudio()

                }, _stepDelay);

            }

            this.playAudio = function() {

              if(_currentStep < _totalSteps) {

                _currentStep++;

              }else if(_currentStep >= _totalSteps){

                _currentStep = 1;

              }

              $_sampleBtn.removeClass('hit');

              for(var i = 1; i < _totalRows + 1; i++) {

                var $_newSample = $('.sample[data-row="' + i + '"][data-column="' + _currentStep + '"]');

                if($_newSample.hasClass('active')) {

                  $('#' + i)[0].currentTime = 0;

                  if(!$_newSample.hasClass('disabled')) {

                    $('#' + i)[0].play();

                  }else{

                    $('#' + i)[0].pause();

                  }

                  $_newSample.addClass('hit');

                }

              }

            };

            this.createMatrix = function(rows, columns) {

              var sampleSize  = $_containerWidth / columns;

              for(var i = 1; i < rows + 1; i++) {

                $('<div class="row" id="row-' + i + '"></div>').appendTo('.container');

                $('<button class="enable-disable-row" id="toggle-row-' + i + '"></button>').prependTo('#row-' + i);

                for(var k = 1; k < columns + 1; k++) {

                  $('<div class="column sample" data-row="' + i + '" data-column="' + k + '" style="height:' + (sampleSize - 8) + 'px;width:' + sampleSize + 'px"></div>').appendTo('#row-' + i);

                }

              }

              $_toggleRowBtn = $('.enable-disable-row');
              $_sampleBtn = $('.sample');

              calculateBPM();

            };

            this.toggleRowBtnHandler = function(button) {

              button.toggleClass('disabled');

              var rowID = button.attr('id').replace('toggle-row-', '');

              $('.sample[data-row="' + rowID + '"]').toggleClass('disabled');

            };


            /**
             * @function init()
             * @desc initiates the DrummerJS global function
             *       creating an active instance of the script on the
             *       current site.
             */

            this.init = function() {

                // run functions here

                _this.pageLoad();

                _this.createMatrix(_totalRows, _totalSteps);
                _this.toggleSampleHandler();

                $_playPauseBtn.on('click', function() {

                  _this.playPauseHandler($(this));

                });

                $_toggleRowBtn.on('click', function() {

                  _this.toggleRowBtnHandler($(this));

                });

                $_setBPM.on('change', function() {

                  _this.updateBPM($(this).val());

                });

                $_setSamplesBtn.on('change', function() {

                  _this.updateSampleList($(this).val());

                });

                // start the drum machine
              
                $_playPauseBtn.click();

                return this;

            };

            // initiate the script!
            return this.init();

        }

        // create a new handler object
        return new _handler();

    }());

// assign DrummerJS to the global namespace
}(window.DrummerJS = window.DrummerJS || {}, jQuery));
