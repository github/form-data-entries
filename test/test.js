/* eslint-env mocha */
/* global chai, formDataEntries */

var assert = chai.assert

test('empty form', function() {
  var form = document.createElement('form')

  assert.deepEqual(formDataEntries(form), [])
})

suite('input', function() {
  test('form with input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with named input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.name = 'foo'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [['foo', '']])
  })

  test('form with valued input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.value = 'foo'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with named and valued input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.name = 'foo'
    input.value = 'bar'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [['foo', 'bar']])
  })

  test('form with duplicate named and valued input', function() {
    var form = document.createElement('form')

    var input1 = document.createElement('input')
    input1.name = 'foo'
    input1.value = 'bar'
    form.appendChild(input1)

    var input2 = document.createElement('input')
    input2.name = 'foo'
    input2.value = 'baz'
    form.appendChild(input2)

    assert.deepEqual(formDataEntries(form), [['foo', 'bar'], ['foo', 'baz']])
  })

  test('form with disabled input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.disabled = true
    input.name = 'foo'
    input.value = 'bar'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [])
  })
})

suite('input[type=text]', function() {
  test('form with input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'text'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with named input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'text'
    input.name = 'foo'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [['foo', '']])
  })

  test('form with valued input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'text'
    input.value = 'foo'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with named and valued input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'text'
    input.name = 'foo'
    input.value = 'bar'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [['foo', 'bar']])
  })
})

suite('input[type=hidden]', function() {
  test('form with input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'hidden'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with named input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'hidden'
    input.name = 'foo'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [['foo', '']])
  })

  test('form with valued input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'hidden'
    input.value = 'foo'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with named and valued input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'hidden'
    input.name = 'foo'
    input.value = 'bar'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [['foo', 'bar']])
  })
})

suite('input[type=submit]', function() {
  test('form with input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'submit'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with named input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'submit'
    input.name = 'foo'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with valued input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'submit'
    input.value = 'foo'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with named and valued input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'submit'
    input.name = 'foo'
    input.value = 'bar'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [])
  })
})

suite('input[type=reset]', function() {
  test('form with input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'reset'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with named input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'reset'
    input.name = 'foo'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with valued input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'reset'
    input.value = 'foo'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with named and valued input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'reset'
    input.name = 'foo'
    input.value = 'bar'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [])
  })
})

suite('input[type=button]', function() {
  test('form with input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'button'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with named input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'button'
    input.name = 'foo'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with valued input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'button'
    input.value = 'foo'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with named and valued input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'button'
    input.name = 'foo'
    input.value = 'bar'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [])
  })
})

suite('input[type=checkbox]', function() {
  test('form with input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'checkbox'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with named input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'checkbox'
    input.name = 'foo'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with checked input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'checkbox'
    input.checked = true
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with named and checked input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'checkbox'
    input.name = 'foo'
    input.checked = true
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [['foo', 'on']])
  })
})

suite('input[type=radio]', function() {
  test('form with input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'radio'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with named input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'radio'
    input.name = 'foo'
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with checked input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'radio'
    input.checked = true
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with named and checked input', function() {
    var form = document.createElement('form')

    var input = document.createElement('input')
    input.type = 'radio'
    input.name = 'foo'
    input.checked = true
    form.appendChild(input)

    assert.deepEqual(formDataEntries(form), [['foo', 'on']])
  })
})

suite('textarea', function() {
  test('form with textarea', function() {
    var form = document.createElement('form')

    var textarea = document.createElement('textarea')
    form.appendChild(textarea)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with named textarea', function() {
    var form = document.createElement('form')

    var textarea = document.createElement('textarea')
    textarea.name = 'text'
    form.appendChild(textarea)

    assert.deepEqual(formDataEntries(form), [['text', '']])
  })

  test('form with valued textarea', function() {
    var form = document.createElement('form')

    var textarea = document.createElement('textarea')
    textarea.textContent = 'Hello, World!'
    form.appendChild(textarea)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with named and valued textarea', function() {
    var form = document.createElement('form')

    var textarea = document.createElement('textarea')
    textarea.name = 'text'
    textarea.textContent = 'Hello, World!'
    form.appendChild(textarea)

    assert.deepEqual(formDataEntries(form), [['text', 'Hello, World!']])
  })

  test('form with disabled textarea', function() {
    var form = document.createElement('form')

    var textarea = document.createElement('textarea')
    textarea.disabled = true
    textarea.name = 'text'
    textarea.textContent = 'Hello, World!'
    form.appendChild(textarea)

    assert.deepEqual(formDataEntries(form), [])
  })
})

suite('select', function() {
  test('form with select', function() {
    var form = document.createElement('form')

    var select = document.createElement('select')
    form.appendChild(select)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with named select', function() {
    var form = document.createElement('form')

    var select = document.createElement('select')
    select.name = 'foo'
    form.appendChild(select)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with select and option', function() {
    var form = document.createElement('form')

    var select = document.createElement('select')
    form.appendChild(select)

    var option = document.createElement('option')
    option.value = 'foo'
    select.appendChild(option)

    assert.deepEqual(formDataEntries(form), [])
  })

  test('form with select and selected option', function() {
    var form = document.createElement('form')

    var select = document.createElement('select')
    select.name = 'foo'
    form.appendChild(select)

    var option = document.createElement('option')
    option.value = 'bar'
    option.selected = true
    select.appendChild(option)

    assert.deepEqual(formDataEntries(form), [['foo', 'bar']])
  })

  test('form with disabled select', function() {
    var form = document.createElement('form')

    var select = document.createElement('select')
    select.disabled = true
    select.name = 'foo'
    form.appendChild(select)

    var option = document.createElement('option')
    option.value = 'bar'
    option.selected = true
    select.appendChild(option)

    assert.deepEqual(formDataEntries(form), [])
  })
})
