    /* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

            function ddKlassen() {

                $('select[name="school_id"]').on('change', function () {
                    var school_id = $(school).val();
                    if (school_id) {
                        $.ajax({
                            url: '<?php echo base_url(); ?>' + 'klas/get_klassen/' + school_id,
                            type: "POST",
                            dataType: "json",
                            success: function (data) {
                                $('select[name="klas_id"]').empty();
                                $.each(data, function (key, value) {
                                    $('select[name="klas_id"]').append('<option value="' + key + '">' + value + '</option>');
                                });
                            }
                        });
                    } else {
                        $('select[name="klas"]').empty();
                    }
                });
            }
